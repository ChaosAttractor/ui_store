import axios from 'axios';
import EventBus from '../event.bus';

/**
 * Api класс для отправки запросов на сервер
 */
class Api {
  /**
   * Создание нового экземпляра Api
   * @param {string} SERVER_BASE_URL - адрес сервера для отправки запросов
   */
  constructor(SERVER_BASE_URL) {
    const baseURL = window.location.href.includes('localhost')
      ? window.location.href.replace(
          window.location.href.substr(window.location.href.indexOf('t:') + 1),
          SERVER_BASE_URL
        )
      : SERVER_BASE_URL;
    this.instance = axios.create({
      withCredentials: true,
      baseURL,
      mode: 'cors',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    this.instance.interceptors.response.use(
      (res) => res,
      async (err) => {
        const isLogoutResponse = '/store/auth/logout/'.includes(err?.config?.url);

        const error = err;

        const response = err.response ? err.response : err;

        const isConflictResponse =
          response.status === 403 && response.headers['x-retry'] === 'true';

        error.config.retries = err.config.retries || { count: 0 };

        const shouldRetry = error.config.retries.count < 3;

        if (isConflictResponse && shouldRetry) {
          error.config.retries.count += 1;

          return this.instance.request(error.config);
        }

        if (response.status === 401 && !isLogoutResponse) {
          EventBus.dispatch('logout');
          return Promise.reject(err);
        }

        if (err?.config?.method === 'get' && [403, 404].includes(response.status)) {
          window.document.dispatchEvent(
            new CustomEvent('errorResponse', {
              detail: response.status,
            })
          );
        }

        return Promise.reject(err);
      }
    );

    /**
     * Отправка Post запроса
     * @param {string} url
     * @param {any} data
     * @param {AxiosRequestConfig<any>||{}} config
     * @return {Promise<AxiosResponse<any>>}
     */
    this.post = async (url, data = {}, config = {}) => this.instance.post(url, data, config);

    /**
     * Отправка Patch запроса
     * @param {string} url
     * @param {any} data
     * @param {AxiosRequestConfig<any>||{}} config
     * @return {Promise<AxiosResponse<any>>}
     */
    this.patch = async (url, data, config = {}) => this.instance.patch(url, data, config);

    /**
     * Отправка Put запроса
     * @param {string} url
     * @param {any} data
     * @param {AxiosRequestConfig<any>||{}} config
     * @return {Promise<AxiosResponse<any>>}
     */
    this.put = async (url, data, config = {}) => this.instance.put(url, data, config);

    /**
     * Отправка Get запроса
     * @param {string} url
     * @param {AxiosRequestConfig<any>||{}} config
     * @return {Promise<AxiosResponse<any>>}
     */
    this.get = async (url, config = {}) => this.instance.get(url, config);

    /**
     * Отправка Delete запроса
     * @param {string} url
     * @param {AxiosRequestConfig<any>||{}} config
     * @return {Promise<AxiosResponse<any>>}
     */
    this.delete = async (url, config = {}) => this.instance.delete(url, config);
  }
}

export default Api;

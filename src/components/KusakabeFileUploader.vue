<template>
  <section class="kusakabe-file-uploader">
    <el-upload
      v-model:file-list="fileList"
      class="kusakabe-file-uploader__upload"
      :drag="drag"
      action=""
      :auto-upload="false"
      :multiple="multiple"
    >
      <template v-if="drag">
        <KusakabeIconWrapper
          icon-name="UploadIcon"
          class="kusakabe-icon-color__gray_fill"
          width="64"
          height="64"
          view-box="0 0 1024 1024"
        />
        <div class="el-upload__text kusakabe-text-t3">
          Перетащите сюда файл или <span class="kusakabe-link">нажмите, чтобы загрузить</span>
        </div>
      </template>
      <template v-else>
        <KusakabeButton :content="btnContent" />
      </template>
      <template #tip>
        <div class="el-upload__tip kusakabe-text-t4">
          {{ description }}
        </div>
      </template>
    </el-upload>
  </section>
</template>

<script>
import KusakabeIconWrapper from '@/components/KusakabeIconWrapper';
import KusakabeButton from '@/components/KusakabeButton';

export default {
  name: 'KusakabeFileUploader',
  components: { KusakabeButton, KusakabeIconWrapper },
  props: {
    description: {
      type: String,
      default: '',
    },
    drag: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    files: {
      type: Array,
      default: () => [],
    },
    btnContent: {
      type: String,
      default: 'Нажмите для загрузки',
    },
  },
  emits: ['change'],
  computed: {
    fileList: {
      get() {
        return this.files;
      },
      set(payload) {
        this.$emit('change', payload);
      },
    },
  },
};
</script>

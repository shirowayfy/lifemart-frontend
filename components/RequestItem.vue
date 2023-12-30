<template>
  <div class="request-item">
    <div class="request-item__image">
      <img :src="avatar?.url" alt="" />
      <div class="request-item__status" :class="{ completed, online }"></div>
    </div>
    <div class="request-item__content">
      <p class="request-item__name">{{ name }}</p>
      <div class="request-item__info">
        <span>{{ address }}</span>
        <!--<span class="dot"></span>
        <span>{{ time }}</span>-->
      </div>
    </div>
    <BaseSimpleButton v-if="unread > 0" class="request-item__unread">{{
      unread
    }}</BaseSimpleButton>
  </div>
</template>

<script setup>
const media = useStrapiMedia();

const props = defineProps({
  unread: {
    type: Number,
    default: 0,
  },
  online: {
    type: Boolean,
    default: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  time: {
    type: String,
    default: "1 мин.",
  },
  message: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: Object,
  },
  address: {
    type: String,
  },
});

const formattedMessage = computed(() => {
  if (props.unread > 0) {
    return props.message.slice(0, 15) + "...";
  }
  return props.message.slice(0, 15) + "...";
});
</script>

<style lang="scss" scoped>
.request-item {
  display: flex;
  align-items: center;
  gap: 10px;

  border-bottom: 1px solid $border-color;
  padding: 15px;

  transition: all 0.3s;

  &.active {
    background: rgba(63, 158, 54, 0.1) !important;
    cursor: pointer;
  }

  &:hover {
    background: $background;
    cursor: pointer;
  }

  &__image {
    position: relative;
    width: 50px;
    height: 50px;

    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__status {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 15px;
    height: 15px;
    background: #ccc;

    border: 3px solid #fff;
    border-radius: 50%;

    &.online {
      background: $primary;
    }
  }

  &__content {
    flex-grow: 1;
  }

  &__name {
    font-size: 18px;
    font-weight: bold;
  }

  &__info {
    span {
      font-size: 14px;
      color: $grey;

      &.dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: $grey;
        display: inline-block;
        vertical-align: middle;
        margin: 0 5px;
        opacity: 0.3;
      }
    }
  }

  &__unread {
    margin-left: auto;
    width: 25px;
    height: 25px;

    background: $red;
    border: none;
    color: #fff;
  }
}
</style>

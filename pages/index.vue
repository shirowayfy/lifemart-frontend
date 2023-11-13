<template>
  <div class="dashboard">
    <div class="dashboard__members">
      <h2 class="dashboard__members-title">Обращения</h2>
      <client-only>
        <div class="dashboard__members-items">
          <div
            class="dashboard__members-section"
            v-for="member in members"
            :key="member.group"
          >
            <button
              class="dashboard__members-btn"
              @click="sectionFlags[member.group] = !sectionFlags[member.group]"
            >
              {{ member.label }}
            </button>
            <Collapse :when="sectionFlags[member.group]">
              <p class="dashboard__members-content">
                <MemberItem v-for="(user, i) of member.users" :key="i" />
              </p>
            </Collapse>
          </div>
        </div>
      </client-only>
    </div>
    <div class="dashboard__chat">
      <div class="dashboard__chat-header">
        <NuxtImg
          width="75"
          height="75"
          src="/demo-user.png"
          class="dashboard__chat-avatar"
        />
        <div class="dashboard__chat-info">
          <p class="dashboard__chat-name">Иванов Иван</p>
          <p class="dashboard__chat-place">Жизньмарт (ул. Ленина д. 31)</p>
        </div>
        <div class="dashboard__chat-dots">
          <NuxtIcon name="dots" />
        </div>
      </div>
      <div class="dashboard__chat-inner">
        <div class="dashboard__chat-content">
          <p class="dashboard__chat-message reversed">
            Добрый день, у меня проблема с кассой
            <span class="time">19:00</span>
          </p>
          <p class="dashboard__chat-message">
            Если касса не работает...
            <span class="time">13:00</span>
          </p>
        </div>
        <div class="dashboard__chat-field">
          <label for="chat-input">
            <NuxtIcon class="emoji" name="smile" filled />
            <input
              placeholder="Введите сообщение..."
              type="text"
              id="chat-input"
            />
            <NuxtIcon class="clip" name="clip" filled />
          </label>
          <button class="btn dashboard__chat-btn">
            <NuxtIcon name="chat-arrow" filled />
          </button>
        </div>
      </div>
    </div>
    <div class="dashboard__member">
      <h2 class="dashboard__member-title">Информация о клиенте</h2>
      <NuxtImg
        width="155"
        height="155"
        class="dashboard__member-avatar"
        src="/demo-user.png"
      />
      <p class="dashboard__member-name">Иванов Иван</p>
      <ul class="dashboard__member-info">
        <li class="dashboard__info-item">
          <span class="field">Telegram:</span>
          <sapn class="value">@qwerty12</sapn>
        </li>
        <li class="dashboard__info-item">
          <span class="field">Должность:</span>
          <sapn class="value">кассир</sapn>
        </li>
        <li class="dashboard__info-item">
          <span class="field">Адрес работы:</span>
          <sapn class="value">Жизньмарт (ул. Ленина д. 31)</sapn>
        </li>
      </ul>
      <ul class="dashboard__member-requests">
        <h4 class="dashboard__requests-title">Другие запросы</h4>
        <li class="dashboard__requests-item" v-for="i in 3" :key="i">
          <span class="status">Завершён</span>
          <span class="date">06.11.2023</span>
          <span class="time">17:35</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { Collapse } from "vue-collapsed";

const sectionFlags = ref({
  active: false,
  pending: false,
  finished: false,
});

const members = ref([
  {
    group: "active",
    label: "В процессе",
    users: new Array(3).fill(""),
  },
  {
    group: "pending",
    label: "Не начатые",
    users: new Array(2).fill(""),
  },
  {
    group: "finished",
    label: "Завершённые",
    users: new Array(3).fill(""),
  },
]);
</script>

<style lang="scss" scoped>
.dashboard {
  $this: &;
  padding: 25px;
  height: 100%;

  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  gap: 25px;

  & > * {
    border-radius: 10px;
    border: 1px solid $border-color;
    background: #fff;
    //backdrop-filter: blur(2px);
  }

  &__members {
    padding: 20px;

    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;

    &-title {
      font-size: 25px;
      font-weight: 700;
      line-height: 20px;
      text-align: center;

      margin-bottom: 15px;
    }

    &-items {
      overflow: scroll;
      flex-grow: 1;
    }

    &-section {
      margin-bottom: 15px;
    }

    &-btn {
      padding: 4px 8px;
      background: $pale-green;

      border-radius: 6px;
      border: none;

      width: 100%;

      text-align: left;
      font-weight: 400;
      line-height: 20px;

      cursor: pointer;
    }

    &-content {
      padding-top: 15px;

      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  &__chat {
    display: flex;
    flex-direction: column;

    &-header {
      padding: 25px 25px 20px;
      border-bottom: 1px solid $border-color;

      display: flex;
      align-items: center;

      position: relative;
    }

    &-avatar {
      margin-right: 25px;
    }

    &-name {
      font-size: 20px;
      font-weight: 400;
      line-height: 20px;
      margin-bottom: 7px;
    }

    &-place {
      color: rgba(12, 31, 26, 0.5);
      font-size: 17px;
      font-weight: 400;
      line-height: 20px;
    }

    &-dots {
      position: absolute;
      top: 25px;
      right: 25px;
      cursor: pointer;
    }

    &-inner {
      padding: 25px;

      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    &-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 20px;

      margin-bottom: 25px;
    }

    &-field {
      display: flex;
      align-items: center;
      gap: 15px;

      label {
        position: relative;
        flex-grow: 1;

        .emoji,
        .clip {
          display: flex;
          font-size: 28px;
          cursor: pointer;

          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        .emoji {
          padding-left: 15px;
          left: 0;
        }

        .clip {
          right: 15px;
        }
      }

      #chat-input {
        width: 100%;
        padding: 11px 58px;

        border-radius: 100px;
        border: 1px solid var(--2, #13332b);

        font-size: 19px;
        font-weight: 400;
        line-height: 20px;
      }
    }

    &-btn {
      background: $primary;
      padding: 8px;
      border-radius: 50%;

      cursor: pointer;

      .nuxt-icon {
        display: flex;
        font-size: 20px;
      }
    }

    &-message {
      padding: 12px 6px 12px 15px;
      padding-right: 60px;

      border-radius: 20px;
      background: var(--5, rgba(63, 158, 55, 0.16));
      font-weight: 400;
      line-height: 20px;

      position: relative;
      width: 45%;

      margin-left: auto;

      &.reversed {
        margin-right: auto;
        margin-left: 0;
        background: $pale-green;
      }

      & .time {
        position: absolute;
        bottom: 5px;
        right: 15px;

        color: rgba(12, 31, 26, 0.5);
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }
    }
  }

  &__member {
    padding: 20px;

    &-title {
      text-align: center;
      margin-bottom: 25px;
    }

    &-avatar {
      margin: 0 auto 20px;
      display: block;
    }

    &-name {
      font-size: 30px;
      font-weight: 400;
      line-height: 20px;

      text-align: center;

      margin-bottom: 60px;
    }

    &-info {
      margin-bottom: 30px;

      #{$this}__info-item {
        font-size: 22px;
        font-weight: 400;
        line-height: 26px;

        &:not(:last-of-type) {
          margin-bottom: 15px;
        }

        .field {
          color: var(--1, #8f8e8e);
          padding-right: 10px;
        }
      }
    }

    &-requests {
      #{$this}__requests-title {
        font-size: 22px;
        font-weight: 400;
        line-height: 20px;
        text-align: center;

        padding: 7px 15px;
        border-radius: 6px;
        background: #def2ef;

        margin-bottom: 20px;
      }

      #{$this}__requests-item {
        font-size: 18px;
        font-weight: 400;
        line-height: 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 4px 8px;
        border-radius: 6px;
        background: rgba(63, 158, 55, 0.3);

        &:not(:last-of-type) {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>

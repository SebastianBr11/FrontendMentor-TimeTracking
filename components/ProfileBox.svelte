<script>
  import { createEventDispatcher } from "svelte";

  export let selected;

  const dispatch = createEventDispatcher();

  const onClick = e => {
    dispatch("select", e.target.textContent.toLowerCase());
  };
</script>

<div class="profile-box">
  <div class="overview">
    <img src="images/image-jeremy.png" alt="Jeremy">
    <div class="content">
      <span class="pretext">Report for</span>
      <h1 class="name">Jeremy Robson</h1>
    </div>
  </div>
  <div class="dates">
    <button class:selected={selected === "daily"} on:click={onClick}>Daily</button>
    <button class:selected={selected === "weekly"} on:click={onClick}>Weekly</button>
    <button class:selected={selected === "monthly"} on:click={onClick}>Monthly</button>
  </div>
</div>

<style>
  .profile-box {
    border-radius: var(--rounded);
    background: var(--clr-blue800);
  }

  .overview {
    display: flex;
    align-items: center;
    padding: 1.6em;
    border-radius: var(--rounded);
    background-color: var(--clr-blue);
  }

  .overview img {
    border: 2px solid white;
    border-radius: 50%;
    flex: 0 1 30%;
    height: 100%;
  }

  .overview .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    flex: 1 1 100%;
    margin-left: 12px;
  }

  .overview .content .pretext {
    font-size: 15px;
    color: var(--clr-blue100);
  }

  .overview .content .name {
    font-size: 22px;
    font-weight: 300;
  }

  @media screen and (min-width: 800px) {
    .profile-box {
      grid-row: span 2;
    }

    .overview {
      flex-direction: column;
      align-items: start;
      padding: 2em;
    }

    .overview img {
      flex: 0 1 auto;
      height: clamp(32px, 2vw + 3rem, 128px);
    }

    .overview .content {
      margin: 42px 0 64px 0;
    }

    .overview .content .name {
      font-size: 42px;
    }
  }

  .dates {
    display: flex;
    padding: 18px 0;
  }

  .dates button {
    flex: 1;
    cursor: pointer;
    font-size: 16px;
    color: var(--clr-blue200);
    background-color: transparent;
    border: none;
    text-align: center;
    transition: color 0.1s ease;
  }

  .dates button:hover,
  .dates button.selected {
    color: white;
  }

  @media screen and (min-width: 800px) {
    .dates {
      flex-direction: column;
      padding: 22px 32px;
      gap: 18px;
      align-items: start;
    }

    .dates button {
      text-align: left;
    }
  }
</style>
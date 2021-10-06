<script>
  import { Ellipsis } from "./icons";
  import IconType from "./icons/IconType.svelte";
  import { capitalizeFirstLetter, getSvgName, hrOrHrs } from "../util";

  export let title = "Title";
  export let timeframes = {
    daily: { current: 1, previous: 1 },
    weekly: { current: 1, previous: 1 },
    monthly: { current: 1, previous: 1 }
  };
  export let selected = "daily";

  $: ({ current, previous } = timeframes[selected]);

  $: formattedTime =
    selected === "daily"
      ? "Yesterday"
      : "Last " + capitalizeFirstLetter(selected.slice(0, -2));

  $: formattedTitle = getSvgName(title);
</script>

<div class="info-box {formattedTitle}">
  <div class="image">
    <IconType name={formattedTitle} />
  </div>
  <div class="content">
    <div class="top">
      <h1 class="title">{title}</h1>
      <Ellipsis />
    </div>
    <div class="bottom">
      <h2 class="current-time">{current}{hrOrHrs(current)}</h2>
      <p class="previous-time">{formattedTime} - {previous}{hrOrHrs(previous)}</p>
    </div>
  </div>
</div>

<style>
  .info-box {
    display: grid;
    position: relative;
    border-radius: var(--rounded);
    overflow: hidden;
    grid-template-rows: 46.6667px 1fr 1fr;
    grid-template-columns: 1fr;
  }

  .image {
    display: flex;
    position: absolute;
    inset: 0;
    z-index: -1;
    grid-row: 1 / 3;
    background-color: var(--bg-color, black);
  }

  :global(.image svg) {
    transform: translateY(var(--svg-translateY, 0));
    margin-left: auto;
    margin-right: 16px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
    padding: 2em;
    background-color: var(--clr-blue800);
    border-radius: var(--rounded);
    grid-row: 2 / 4;
    transition: background-color 0.1s ease;
  }

  .content:hover {
    background-color: var(--clr-blue800-light);
  }

  .content .top,
  .content .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  :global(.content .top svg:hover path) {
    fill: white;
  }

  .content .title {
    font-size: 18px;
    font-weight: 500;
  }

  .content .current-time {
    font-weight: 300;
    font-size: 32px;
  }

  .content .previous-time {
    font-size: 14px;
    color: var(--clr-blue100);
  }

  @media screen and (min-width: 800px) {
    .content {
      gap: 16px;
    }

    .content .bottom {
      flex-direction: column;
      align-items: start;
      gap: 12px;
    }

    .content .current-time {
      font-size: 56px;
    }
  }

  .work {
    --bg-color: var(--clr-work);
    --svg-translateY: -12px;
  }
  .play {
    --bg-color: var(--clr-play);
    --svg-translateY: -6px;
  }
  .study {
    --bg-color: var(--clr-study);
    --svg-translateY: -10px;
  }
  .exercise {
    --bg-color: var(--clr-exercise);
  }
  .social {
    --bg-color: var(--clr-social);
    --svg-translateY: -16px;
  }
  .self-care {
    --bg-color: var(--clr-self-care);
    --svg-translateY: -12px;
  }
</style>
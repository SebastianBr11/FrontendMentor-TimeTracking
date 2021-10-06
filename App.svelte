<script>
  import InfoBox from "./components/InfoBox.svelte";
  import ProfileBox from "./components/ProfileBox.svelte";
  import * as data from "./data.json";

  let selected = "daily";

  const setSelected = e => {
    selected = e.detail;
  };
</script>

<div class="container">
  <div class="grid">
    <ProfileBox bind:selected on:select={setSelected} />
    {#each data.default as categoryData}
      <InfoBox bind:selected {...categoryData} />
    {/each}
</div>
</div>

<style>
  .container {
    flex: 1;
    max-width: 1150px;
    max-height: 100%;
  }

  .grid {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  :global(:root) {
    --clr-blue: hsl(246, 80%, 60%);

    --clr-work: hsl(15, 100%, 70%);
    --clr-play: hsl(195, 74%, 62%);
    --clr-study: hsl(348, 100%, 68%);
    --clr-exercise: hsl(145, 58%, 55%);
    --clr-social: hsl(264, 64%, 52%);
    --clr-self-care: hsl(43, 84%, 65%);

    --clr-blue100: hsl(236, 100%, 87%);
    --clr-blue200: hsl(235, 45%, 61%);
    --clr-blue800: hsl(235, 46%, 20%);
    --clr-blue800-light: hsl(235, 46%, 28%);
    --clr-blue900: hsl(226, 43%, 10%);

    --rounded: 16px;
  }

  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: "Rubik", sans-serif;
    padding: 2em 1.5em;
    background-color: var(--clr-blue900);
    color: white;
  }

  :global(button) {
    font-family: "Rubik", sans-serif;
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet"> 
</svelte:head>
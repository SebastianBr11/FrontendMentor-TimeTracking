<script>
  import { Exercise, Play, SelfCare, Social, Study, Work } from "./index";
  export let name;

  const icons = {
    exercise: Exercise,
    play: Play,
    "self-care": SelfCare,
    social: Social,
    study: Study,
    work: Work
  };
</script>

<svelte:component this={icons[name]} />
<script>
  export let data;
</script>

<h1>Articles page</h1>

<ul>
  {#each data.articles as article}
    <li>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </li>
  {/each}
</ul>

<template>
  <Layout pageTitle="Category">
    <section class="section">
      <div class="container">
        <div class="content">
          <h2>Category</h2>
            <div class="section">
              <div class="container">
                <div class="columns">
                  <div class="column"></div>
                  <div class="column cards-grid is-four-fifths">
                      <a href="tag/vue-js">
                        <g-image src="~/assets/images/vue.jpeg" width="300" height="200" border-radius="5px" />
                      </a>
                    <div class="grid-item"></div>
                    <div class="grid-item"></div>
                  </div>
                  <div class="column"></div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query {
    posts: allPost {
      edges {
        node {
          id
          title
          path
          excerpt
          featuredImage
          author {
            id
            title
            path
            image
          }
          tags {
            id
            path
          }
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Category',
  },
};
</script>

<style>
.card {
  margin-bottom: 1.5rem;
}

.card-image {
  width: 100% !important;
}

.cards-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  width: 100%;
  justify-content: center;
}

/* Mobile First */
.grid-item {
  width: 100%;
  transition: all 0.2s ease-in-out;
}
/*Medium Width */
@media screen and (min-width: 740px) {
  .grid-item {
    width: calc((100% / 2) - 30px);
  }
}
/*Wide Width */
@media screen and (min-width: 991px) {
  .grid-item {
    width: calc((100% / 3) - 30px);
  }
}
</style>

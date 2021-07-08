export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60e6b465b58744b25a37113e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-q824v4h3",
                  apiId: "8beb8f75-628b-46a2-8a5f-f775cb1d5216",
                },
                {
                  buildHookId: "60e6b465a9a51bb5b769b31f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-17234fhb",
                  apiId: "527e74fe-7ebb-45f0-bfde-8e9808990501",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/chihabhajji/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-17234fhb.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};


import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/fnt");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.setServerOptions({
    watch: ["./public/css/styles.css"],
  });
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };
}

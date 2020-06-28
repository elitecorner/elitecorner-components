import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "ec-banner",
  styleUrl: "ec-banner.css",
  shadow: true,
})
export class EliteCornerBanner {
  @Prop() article: string = "Elite Corner";
  @Prop() angular: string;
  @Prop() animation: string;
  @Prop() cdk: string;
  @Prop() cli: string;
  @Prop() i18n: string;
  @Prop() components: string;
  @Prop() material: string;
  @Prop() npm: string;
  @Prop() node: string;
  @Prop() pwa: string;
  @Prop() universal: string;
  @Prop() repo: string;
  private data: any;
  componentWillLoad() {
    this.data = {
      angular: {
        title: "Angular",
        icon: "angular.svg",
        herf: "https://angular.io/",
        version: this.angular,
      },
      animation: {
        title: "Angular Animation",
        icon: "animations.svg",
        herf: "https://angular.io/guide/animations",
        version: this.animation,
      },
      cdk: {
        title: "Angular CDK",
        icon: "cdk.svg",
        herf: "https://material.angular.io/cdk/categories",
        version: this.cdk,
      },
      cli: {
        title: "Angular CLI",
        icon: "cli.svg",
        herf: "https://cli.angular.io/",
        version: this.cli,
      },
      components: {
        title: "Web Components",
        icon: "components.svg",
        herf: "https://angular.io/guide/elements",
        version: this.components,
      },
      i18n: {
        title: "i18n",
        icon: "i18n.svg",
        herf: "https://angular.io/guide/i18n",
        version: this.i18n,
      },
      material: {
        title: "Angular Material",
        icon: "material.svg",
        herf: "https://material.angular.io/",
        version: this.material,
      },
      npm: {
        title: "NPM",
        icon: "npm.jpg",
        herf: "https://www.npmjs.com/",
        version: this.npm,
      },
      node: {
        title: "Node Js",
        icon: "nodejs.jpg",
        herf: "https://nodejs.org/en/",
        version: this.node,
      },
      pwa: {
        title: "PWA",
        icon: "pwa.svg",
        herf: "https://angular.io/guide/service-worker-getting-started",
        version: this.pwa,
      },
      universal: {
        title: "Universal",
        icon: "universal.svg",
        herf: "https://angular.io/guide/universal",
        version: this.universal,
      },
    };
  }
  renderLogos() {
    return Object.keys(this.data).map(
      (item) =>
        this.data[item].version && (
          <a
            class="circle-link"
            title="Animations"
            href={this.data[item].herf}
            target="_blank"
            rel="noopener"
          >
            <img
              src={"/assets/svg/" + this.data[item].icon}
              alt={this.data[item].title + " Logo"}
            ></img>
            <span class="title">{this.data[item].title}</span>
            <small class="version">{this.data[item].version}</small>
          </a>
        )
    );
  }

  render() {
    return [
      <div class="toolbar" role="banner">
        <img
          class="logo"
          width="40"
          alt="elite corner Logo"
          src="/assets/elite-corner-logo.png"
        />
        <span>{this.article}</span>
        <div class="spacer"></div>
      </div>,
      <div class="content" role="main">
        <div class="card highlight-card card-small">
          <strong>Technologies used in this example</strong>
        </div>
        ,<div class="card-container">{this.renderLogos()}</div>
      </div>,
      this.repo && (
        <div class="terminal">
          <pre>git clone {this.repo + ".git"}</pre>
          <pre>cd {this.findRepoName(this.repo)}</pre>
          <pre>npm install</pre>
          <pre>ng serve</pre>
        </div>
      ),
      this.repo && (
        <div class="source-code">
          <a class="btn" target="_blank" rel="noopener" href={this.repo}>
            <span>Download Source Code </span>
          </a>
        </div>
      ),

      <svg
        id="clouds"
        xmlns="http://www.w3.org/2000/svg"
        width="2611.084"
        height="485.677"
        viewBox="0 0 2611.084 485.677"
      >
        <path
          id="Path_39"
          data-name="Path 39"
          d="M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z"
          transform="translate(142.69 -634.312)"
          fill="#eee"
        />
      </svg>,
    ];
  }
  findRepoName(url) {
    var parts = url.split("https://github.com/elitecorner/");
    return parts[1];
  }
}

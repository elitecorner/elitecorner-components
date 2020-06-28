/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface EcBanner {
        "angular": string;
        "animation": string;
        "article": string;
        "cdk": string;
        "cli": string;
        "components": string;
        "i18n": string;
        "material": string;
        "node": string;
        "npm": string;
        "pwa": string;
        "repo": string;
        "universal": string;
    }
}
declare global {
    interface HTMLEcBannerElement extends Components.EcBanner, HTMLStencilElement {
    }
    var HTMLEcBannerElement: {
        prototype: HTMLEcBannerElement;
        new (): HTMLEcBannerElement;
    };
    interface HTMLElementTagNameMap {
        "ec-banner": HTMLEcBannerElement;
    }
}
declare namespace LocalJSX {
    interface EcBanner {
        "angular"?: string;
        "animation"?: string;
        "article"?: string;
        "cdk"?: string;
        "cli"?: string;
        "components"?: string;
        "i18n"?: string;
        "material"?: string;
        "node"?: string;
        "npm"?: string;
        "pwa"?: string;
        "repo"?: string;
        "universal"?: string;
    }
    interface IntrinsicElements {
        "ec-banner": EcBanner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ec-banner": LocalJSX.EcBanner & JSXBase.HTMLAttributes<HTMLEcBannerElement>;
        }
    }
}

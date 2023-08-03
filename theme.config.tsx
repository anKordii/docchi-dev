import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span
      style={{
        alignItems: "center",
        display: "flex",
        gap: ".75rem",
        fontWeight: 500,
      }}
    >
      <img
        src="https://docchi.pl/static/img/logo.svg"
        style={{ maxWidth: "100%", height: "1.5em", display: "unset" }}
      />{" "}
      docchi
    </span>
  ),
  head: (
    <>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          key="description"
          name="description"
          content="Docchi website, Meet Developers."
        />

        <meta
          property="og:description"
          key="og:description"
          content="Docchi website Meet Developers."
        ></meta>
        <meta
          property="og:title"
          key="og:title"
          content="Docchi Developers"
        />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          key="twitter:title"
          content="Docchi Developers"
        />
        <meta
          name="twitter:description"
          key="twitter:description"
          content="Docchi website, Meet Developers."
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@docchipl" />

        <meta
          name="keywords"
          content="docchi, docci, doczi, dochi, docchipl, docchifun, online"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />

        <meta property="og:image" content="https://storage.docchi.pl/og-default.png" key="og:image" />
        <meta
          name="twitter:image"
          content="https://storage.docchi.pl/og-default.png"
          key="twitter:image"
        />
        <title key="title">Docchi Developers</title>
    </>
  ),
  chat: {
    link: "https://docchi.pl/discord",
  },
  footer: {
    text: "Docchi Developer Documentation",
  },
  editLink: {
    text: ""
  },
  feedback: {
    content: null
  },
  docsRepositoryBase: "https://docchi.pl"
};

export default config;

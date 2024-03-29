/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REDIRECT_URI?: string;
  readonly VITE_API_BASE?: string;
  readonly VITE_CLIENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/** Ambient types so the client half typechecks without installing unpublished harness packages. */

declare module '@deepseek-ai/dsh-client-store' {
  export interface SnapshotStore<T> {
    set(value: T): void
  }
  export function createSnapshotStore<T>(initial: T): SnapshotStore<T>
}

declare module '@deepseek-ai/dsh-client-ui-primitives' {
  import type { ReactNode, MouseEventHandler } from 'react'
  export function Button(props: {
    variant?: string
    size?: string
    disabled?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
    children?: ReactNode
  }): ReactNode
}

declare module '@deepseek-ai/dsh-client-ui-settings/client' {
  export interface SettingsScopeSnapshot<T> {
    status: string
    writable: boolean
    value?: T
    base?: unknown
    user?: unknown
  }
  export interface SettingsScope<T> {
    getSnapshot(): SettingsScopeSnapshot<T>
    subscribe(listener: () => void): () => void
    set(key: string, value: unknown): Promise<void>
    unset(key: string): Promise<void>
  }
}

declare module '@deepseek-ai/dsh-client-ui-slots' {
  export interface LocaleNamespaceMap {
    [key: string]: string
  }
  export type PropsRuntime<K extends string> = {
    [key: string]: unknown
  } & (K extends string ? object : never)
  export type PropsLocale<N extends string> = {
    t: (key: string) => string
  } & (N extends string ? object : never)
  export type InjectFace<T> = T & {
    [K in `use${Capitalize<string & keyof T['hooks']>}`]: K extends `use${infer Name}`
      ? (selector: (snapshot: unknown) => unknown) => unknown
      : never
  }
}

declare module '@deepseek-ai/dsh-client-locale/client' {
  export {}
}

declare module '@deepseek-ai/dsh-client-ui-renderer/client' {
  export {}
}

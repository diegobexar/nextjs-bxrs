import { client } from "@/sanity/client";

const THEME_QUERY = `*[_type == "siteSettings"][0].theme`;

export async function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = await client.fetch<string>(
    THEME_QUERY,
    {},
    { next: { revalidate: 30 } }
  );

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      {children}
    </div>
  );
}

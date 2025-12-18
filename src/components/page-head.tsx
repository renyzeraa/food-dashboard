import { Head } from '@unhead/react'

export interface PageMeta {
    title?: string
    description?: string
    keywords?: string
    ogTitle?: string
    ogDescription?: string
    ogImage?: string
    twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
    canonical?: string
}

export function PageHead({
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    twitterCard = 'summary',
    canonical,
}: PageMeta) {
    const fullTitle = title ? `${title} | Food Dashboard` : 'Food Dashboard'

    return (
        <Head>
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph (compartilhamento em redes sociais) */}
            {ogTitle && <meta property="og:title" content={ogTitle} />}
            {ogDescription && (
                <meta property="og:description" content={ogDescription} />
            )}
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta property="og:type" content="website" />

            {/* Twitter Card */}
            <meta name="twitter:card" content={twitterCard} />
            {title && <meta name="twitter:title" content={fullTitle} />}
            {description && <meta name="twitter:description" content={description} />}

            {/* Preconnect para melhorar performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Head>
    )
}

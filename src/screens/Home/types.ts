export default interface Font  {
    fontName: string;
    url: string;
    featuredCarousel: boolean;
    featuredThumbnial: boolean;
    downloadUrl: string;
    gif?: string;
    controls: Controls;
}

interface Controls {
    fontSize: number;
    tracking: number;
    lineHeight: number;
    alignment: string;
    openTypeFeatured: object;
}
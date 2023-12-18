export interface MovieInterface {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  genre: string;
}
export interface LayoutProps {
  title?: string;
  description?: string;
  navbar?: React.ReactNode;
  // footer?: React.ReactNode;
  children: React.ReactNode;
  data?: any;
  imageURl?: any;
}
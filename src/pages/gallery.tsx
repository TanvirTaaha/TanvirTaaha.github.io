import Layout from "@/components/Layout";
import ImmersiveGallery from "@/components/sections/ImmersiveGallery";
import {
  personalInfo,
  galleryItems,
  cvUrl,
} from "@/data";

export default function GalleryPage() {
  return (
    <Layout info={personalInfo} cvUrl={cvUrl}>
      <ImmersiveGallery items={galleryItems} />
    </Layout>
  );
}


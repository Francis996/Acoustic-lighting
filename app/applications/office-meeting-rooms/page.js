import { OfficeMeetingRoomsPage } from "../../../components/pages/OfficeMeetingRoomsPage";
import content from "../../../content/siteContent.json";
import { createPageMetadata } from "../../../lib/metadata";

const pathname = "/applications/office-meeting-rooms";

export function generateMetadata() {
  return createPageMetadata({
    pathname,
    title: content.pages.officeMeetingRooms.seo.title,
    description: content.pages.officeMeetingRooms.seo.description,
    images: [{ url: "/assets/img/applications/office-meeting/open-office-acoustic-linear.png" }]
  });
}

export default function Page() {
  return <OfficeMeetingRoomsPage content={content} />;
}

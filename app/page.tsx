import fs from "node:fs";
import path from "node:path";

const bodyPath = path.join(process.cwd(), "public", "body.html");
const bodyHtml = fs.readFileSync(bodyPath, "utf8");

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}

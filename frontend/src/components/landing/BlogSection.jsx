import React from "react";
import CardBlog from "../common/CardBlog";

export default function BlogSection() {
  return (
    <div>
      <div className="flex flex-col mt-8">
        {/* text */}
        <div className="flex flex-col gap-1">
          <h1 className="text-[32px]">Latest Articles</h1>
          <p className="">
            Insight, stories, and updates from our latest posts.
          </p>
        </div>

        {/* component card blog */}
        <div className="flex flex-row justify-between mt-8">
          <CardBlog
            title={"Testing from developer"}
            desc={"Testing desc from developer"}
            username={"Admin"}
            datetime={"12 Agustus 2025"}
            pathPhoto={"/assets/photo1.png"}
            navigateLink={"/article"}
          />
        </div>
      </div>
    </div>
  );
}

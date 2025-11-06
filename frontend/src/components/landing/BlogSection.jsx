import React from "react";
import CardBlog from "../common/CardBlog";

export default function BlogSection({title, subtitle}) {
  return (
    <div>
      <div className="flex flex-col mt-8">
        {/* text */}
        <div className="flex flex-col gap-1">
          <h1 className="text-[32px]">{title}</h1>
          <p className="">
            {subtitle}
          </p>
        </div>

        {/* component card blog */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 xl:gap-8">
          <CardBlog
            title={"Testing from developer"}
            desc={"Testing desc from developer"}
            username={"Admin"}
            datetime={"12 Agustus 2025"}
            pathPhoto={"/assets/photo1.png"}
            navigateLink={"/article"}
          />
          <CardBlog
            title={"Testing from developer"}
            desc={"Testing desc from developer"}
            username={"Admin"}
            datetime={"12 Agustus 2025"}
            pathPhoto={"/assets/photo1.png"}
            navigateLink={"/article"}
          />
          <CardBlog
            title={"Testing from developer"}
            desc={"Testing desc from developer"}
            username={"Admin"}
            datetime={"12 Agustus 2025"}
            pathPhoto={"/assets/photo1.png"}
            navigateLink={"/article"}
          />
          <CardBlog
            title={"Testing from developer"}
            desc={"Testing desc from developer"}
            username={"Admin"}
            datetime={"12 Agustus 2025"}
            pathPhoto={"/assets/photo1.png"}
            navigateLink={"/article"}
          />
          <CardBlog
            title={"Testing from developer"}
            desc={"Testing desc from developer"}
            username={"Admin"}
            datetime={"12 Agustus 2025"}
            pathPhoto={"/assets/photo1.png"}
            navigateLink={"/article"}
          />
          <CardBlog
            title={"Testing from developer"}
            desc={"Testing desc from developer"}
            username={"Admin"}
            datetime={"12 Agustus 2025"}
            pathPhoto={"/assets/photo1.png"}
            navigateLink={"/article"}
          />
          <CardBlog
            title={"Testing from developer"}
            desc={"Testing desc from developer"}
            username={"Admin"}
            datetime={"12 Agustus 2025"}
            pathPhoto={"/assets/photo1.png"}
            navigateLink={"/article"}
          />
          <CardBlog
            title={"Testing from developer"}
            desc={"Testing desc from developer"}
            username={"Admin"}
            datetime={"12 Agustus 2025"}
            pathPhoto={"/assets/photo1.png"}
            navigateLink={"/article"}
          />
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

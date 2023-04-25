import Image from "next/image";
import Link from "next/link";

import {
  StyledWorldItem,
  StyledWorldContent,
  StyledWorldImgWrapper,
} from "./world.style";

type Props = {
  title: string;
  desc: string;
  img: string;
  bgPattern?: string;
  path: string;
};

const WorldItem = ({ title, desc, img, path, bgPattern }: Props) => {
  return (
    <StyledWorldItem bgPattern={bgPattern}>
      <Link href={path}>
        <StyledWorldImgWrapper>
          <Image priority fill src={img} alt={title} />
        </StyledWorldImgWrapper>
        <StyledWorldContent>
          <div>
            <h3 className="font-marco world-inner-element">{title}</h3>
          </div>
          <div className="world-inner-element">
            <p className="mb-8 font-medium font-inter">{desc}</p>
            <p className="text-md text-white capitalize py-2 font-semibold font-inter explore-item">
              explore
            </p>
          </div>
        </StyledWorldContent>
      </Link>
    </StyledWorldItem>
  );
};

export default WorldItem;

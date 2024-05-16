import Link from "next/link";
import Style from "./HelpCenter.css";
import styled from "styled-components";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "NFT details",
      link: "nft-details",
    },
    {
      name: "Account setting",
      link: "account-setting",
    },
    {
      name: "wallet",
      link: "accountwallet",
    },
  ];

  const StyledLink = styled.div`
    color: black;
    &:hover {
      color: white;
    }
  `;

  return (
    <div>
      {helpCenter.map((el, i) => (
        <div key={i + 1} className="helpCenter">
          <Link href={{ pathname: `${el.link}` }}>
            <StyledLink>{el.name}</StyledLink>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;

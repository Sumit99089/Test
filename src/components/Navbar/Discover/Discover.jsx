import "./Discover.css";
import Link from "next/link";
import styled from "styled-components";

const Discover = () => {
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
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
      {discover.map((el, i) => (
        <div key={i + 1} className="discover">
          <Link href={{ pathname: `${el.link}` }}>
            <StyledLink>{el.name}</StyledLink>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;

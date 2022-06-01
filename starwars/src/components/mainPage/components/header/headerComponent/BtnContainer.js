import {
  BtnContainer,
  HeaderBtn,
  SearchContainer,
  SearchInput,
  StyledLink,
} from "../style";
import SearchSvg from "../../../../../assets/svg/searchSvg";

function BtnParents(props) {
  const { data, onCLick, show } = props;
  return (
    <BtnContainer>
      {data.map((item) => {
        return (
          <HeaderBtn>
            <StyledLink to={item.path}>{item.name}</StyledLink>
          </HeaderBtn>
        );
      })}
      <SearchContainer>
        <HeaderBtn onClick={onCLick}>
          {show && <SearchInput type={"search"} placeholder={"search"} />}
          <SearchSvg width={16} height={16} color={"gray"} />
        </HeaderBtn>
      </SearchContainer>
    </BtnContainer>
  );
}
export default BtnParents;

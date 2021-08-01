import React from "react";
import styled from "styled-components";

const NavbarCont = styled.div`
  background: rgba(75, 191, 107, 0.8);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  padding: 20px;
  width: inherit;
  color: #ffffff;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
`;
const NavbarCont2 = styled.div`
  display: flex;
`;

const Navbar = () => {
  return (
    <NavbarCont>
      <h2>Trello - Clone</h2>
      <NavbarCont2>
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMDA3ZmI1O30uY2xzLTJ7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGRhdGEtbmFtZT0iMTQtbGlua2VkaW4iIGlkPSJfMTQtbGlua2VkaW4iPjxyZWN0IGNsYXNzPSJjbHMtMSIgaGVpZ2h0PSI2NCIgcng9IjExLjIiIHJ5PSIxMS4yIiB3aWR0aD0iNjQiLz48cmVjdCBjbGFzcz0iY2xzLTIiIGhlaWdodD0iMzIuNzIiIHdpZHRoPSI5LjAzIiB4PSI4Ljk5IiB5PSIyMy41NCIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQ4LjIsMjMuNTRDNDEuNTQsMjEsMzYuNzIsMjUuMywzNC42NiwyNy43VjIzLjU0aC05VjU2LjI2aDlWMzlhOC40NSw4LjQ1LDAsMCwxLDIuMjMtNS45Miw0Ljc1LDQuNzUsMCwwLDEsMy40MS0xLjY3QTUuNDIsNS40MiwwLDAsMSw0NC4yNCwzM2E2LjEzLDYuMTMsMCwwLDEsMS43LDQuMzVWNTYuMjZINTYuMVYzNlM1Ny4yMywyNi45Miw0OC4yLDIzLjU0WiIvPjxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iMTMuNSIgY3k9IjEzLjM4IiByPSI1LjY0Ii8+PC9nPjwvc3ZnPg=="
          style={{ height: "23px" }}
        />
        <a
          style={{ textDecoration: "none", color: "#ffffff" }}
          href="https://www.linkedin.com/in/ajithmadhan113/"
        >
          &nbsp;&nbsp;Ajithmadhan&nbsp;&nbsp;
        </a>
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBpZD0iT1VUTElORV9jb3B5XzIiPjxnPjxwYXRoIGQ9Ik0xNiwwQzcuMTYzLDAsMCw3LjE2MywwLDE2YzAsOC44MzcsNy4xNjQsMTYsMTYsMTZjOC44MzcsMCwxNi03LjE2MywxNi0xNkMzMiw3LjE2MywyNC44MzcsMCwxNiwweiBNMTguMDY3LDE4Ljk2ICAgIGMwLjMzMywwLjI4OSwwLjU5MiwxLjMwOCwwLjU5MiwxLjc3NnY0LjE0NGgtMi4zNjVoLTIuMzY4YzAsMCwwLjAwNy0xLjQwNSwwLTIuMzY4Yy0zLjI0LDAuNjk3LTQuMTQ0LTEuNzc2LTQuMTQ0LTEuNzc2ICAgIEM5LjE5LDE5LjU1Miw4LjU5OCwxOC45Niw4LjU5OCwxOC45NmMtMS4xODQtMC43MDMsMC0wLjU5MiwwLTAuNTkyYzEuMTg0LDAsMS43NzYsMS4xODQsMS43NzYsMS4xODQgICAgYzEuMDM5LDEuNzY0LDIuODg4LDEuNDgsMy41NTIsMS4xODRjMC0wLjU5MiwwLjI1OS0xLjQ4NywwLjU5Mi0xLjc3NmMtMi41ODYtMC4yOTEtNC43MzgtMS43NzYtNC43MzgtNC43MzYgICAgYzAtMi45NiwwLjU5NC0zLjU1MiwxLjE4Ni00LjE0NGMtMC4xMi0wLjI5Mi0wLjYxNS0xLjM3LDAuMDE4LTIuOTZjMCwwLDEuMTYzLDAsMi4zNDcsMS43NzZjMC41ODctMC41ODcsMi4zNjgtMC41OTIsMi45NjEtMC41OTIgICAgYzAuNTkxLDAsMi4zNzMsMC4wMDUsMi45NTksMC41OTJjMS4xODQtMS43NzYsMi4zNS0xLjc3NiwyLjM1LTEuNzc2YzAuNjMzLDEuNTksMC4xMzgsMi42NjgsMC4wMTgsMi45NiAgICBjMC41OTIsMC41OTIsMS4xODQsMS4xODQsMS4xODQsNC4xNDRDMjIuODA0LDE3LjE4NCwyMC42NTQsMTguNjY5LDE4LjA2NywxOC45NnoiLz48L2c+PC9nPjwvc3ZnPg=="
          style={{ height: "23px" }}
        />
        <a
          style={{ textDecoration: "none", color: "#ffffff" }}
          href="https://github.com/ajithMadhan11"
        >
          &nbsp;&nbsp;ajithmadhan11
        </a>
      </NavbarCont2>
    </NavbarCont>
  );
};

export default Navbar;

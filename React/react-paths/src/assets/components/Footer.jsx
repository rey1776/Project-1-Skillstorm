

export const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <>
      <hr />
        <p>
          Warehouse Solution INC.<br/>
          Copyright © {currentYear} <br/>
          All rights reserved
        </p>
    </>
  )
}

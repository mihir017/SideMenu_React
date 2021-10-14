import React from "react";

const SidebarMenu = () => {
    // const [isOpen, setIsOpen] = useState(false);

    const onLinkClick = (e) => {
        console.log(e.target.children[1]);
        // e.target.nextElementSibling.classList.contains("active")
        //     ? e.target.nextElementSibling.classList.remove("active")
        //     : e.target.nextElementSibling.classList.add("active");
        if (e.target.nextElementSibling.classList.contains("active")) {
            e.target.children[1].className = "fas fa-plus";
            e.target.nextElementSibling.classList.remove("active");
        } else {
            e.target.children[1].className = "fas fa-minus";
            e.target.nextElementSibling.classList.add("active");
        }
    };
    return (
        <div className="sidebarMenu">
            <ul onClick={onLinkClick} className="leftUL">
                <li>
                    <div
                        className="link flex align-items"
                        // onClick={onLinkClick}
                    >
                        <a href="/">Women's Clothing</a>
                        <i className="fas fa-plus"></i>
                    </div>
                    <div
                        // ref={active}
                        className={`dropdown`}
                    >
                        <li>
                            <a href="/">All Women's Clothing</a>
                        </li>
                        <li>
                            <a href="/">Activewear</a>
                        </li>
                        <li>
                            <a href="/">Dresses</a>
                        </li>
                        <li>
                            <a href="/">Jeans</a>
                        </li>
                        <li>
                            <a href="/">Pajamas & Robes</a>
                        </li>
                    </div>
                </li>
                <li>
                    <div
                        className="link flex align-items"
                        // onClick={onLinkClick}
                    >
                        <a href="/">Mens's Clothing</a>
                        <i className="fas fa-plus"></i>
                    </div>
                    <div className={`dropdown `}>
                        <li>
                            <a href="/">All Women's Clothing</a>
                        </li>
                        <li>
                            <a href="/">Activewear</a>
                        </li>
                        <li>
                            <a href="/">Dresses</a>
                        </li>
                        <li>
                            <a href="/">Jeans</a>
                        </li>
                        <li>
                            <a href="/">Pajamas & Robes</a>
                        </li>
                    </div>
                </li>
                <li>
                    <div
                        className="link flex align-items"
                        // onClick={onLinkClick}
                    >
                        <a href="/">Women's Shoes</a>
                        <i className="fas fa-plus"></i>
                    </div>
                    <div className={`dropdown `}>
                        <li>
                            <a href="/">All Women's Clothing</a>
                        </li>
                        <li>
                            <a href="/">Activewear</a>
                        </li>
                        <li>
                            <a href="/">Dresses</a>
                        </li>
                        <li>
                            <a href="/">Jeans</a>
                        </li>
                        <li>
                            <a href="/">Pajamas & Robes</a>
                        </li>
                    </div>
                </li>
                <li>
                    <div
                        className="link flex align-items"
                        // onClick={onLinkClick}
                    >
                        <a href="/">Men's Shoes</a>
                        <i className="fas fa-plus"></i>
                    </div>
                    <div className={`dropdown `}>
                        <li>
                            <a href="/">All Women's Clothing</a>
                        </li>
                        <li>
                            <a href="/">Activewear</a>
                        </li>
                        <li>
                            <a href="/">Dresses</a>
                        </li>
                        <li>
                            <a href="/">Jeans</a>
                        </li>
                        <li>
                            <a href="/">Pajamas & Robes</a>
                        </li>
                    </div>
                </li>
                <li>
                    <div
                        className="link flex align-items"
                        // onClick={onLinkClick}
                    >
                        <a href="/">Services & Guides</a>
                        <i className="fas fa-plus"></i>
                    </div>
                    <div className={`dropdown `}>
                        <li>
                            <a href="/">All Women's Clothing</a>
                        </li>
                        <li>
                            <a href="/">Activewear</a>
                        </li>
                        <li>
                            <a href="/">Dresses</a>
                        </li>
                        <li>
                            <a href="/">Jeans</a>
                        </li>
                        <li>
                            <a href="/">Pajamas & Robes</a>
                        </li>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default SidebarMenu;

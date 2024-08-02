import React from 'react'
import Image from "next/image";
import image from "../../../public/vesper.png"
const Footer = () => {
    return (
        <div style={{
            height: 350, padding: "100px 250px ", minWidth: "1200px",
            backgroundColor: "#1f1f1f", color: "white",

        }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>

                    <Image
                        src={image}
                        width={136}
                        alt='picture shop'
                        style={{
                            height: "100%",
                            zIndex: "0"

                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <h4>Resources</h4>
                    <p>Send Us Feedback</p>
                    <p>Become A Member</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <h4>Help</h4>
                    <p>Get Help</p>
                    <p>Find A Store</p>
                    <p>Contact Us</p>
                </div>


            </div>
            <div style={{ display: "flex", justifyContent: "center", margin: 30 }}>
                <p>© 2024 Vesper, Inc. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
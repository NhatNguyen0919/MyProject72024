"use client"
import React from 'react'
import Image from "next/image";
import image from "../../../public/vesper.png"
import SearchIcon from '@mui/icons-material/Search';
import { alpha, InputBase, styled } from '@mui/material';
import Link from 'next/link';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(3)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '0ch',
            '&:focus': {
                width: '12ch',
            },
        },
    },
}));

const items = [
    { name: 'Nike', link: '#' },
    { name: 'Adidas', link: '#' },
    { name: 'Stussy', link: '#' },
    { name: 'Vans', link: '#' }
]


const Header = () => {
    return (
        <div>
            <div style={{
                minWidth: "1200px",
                backgroundColor: "#1f1f1f",
                height: 51,
                color: "white",
                borderBottom: "1px solid #393939",
                padding: "0 20px",
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    height: "100%",
                    alignItems: "center",
                }}>
                    <div
                        style={{
                            width: "7%",
                            height: "100%",
                        }}
                    >
                        <div style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            borderLeft: "1px solid #393939",
                            borderRight: "1px solid #393939",
                            justifyContent: "center",
                            padding: "0 10px"

                        }}>
                            <Link href={"/login"} style={{
                                textTransform: "uppercase",
                                cursor: "pointer",
                                fontWeight: "500",
                                color: "white",
                                textDecoration: "none"
                            }}>
                                Log in
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Link href={"/"} style={{
                            cursor: "pointer",

                        }}>
                            <Image
                                src={image}
                                width={80}
                                alt='picture shop'
                                style={{
                                    height: "100%",
                                    zIndex: "0"

                                }}
                            />
                        </Link>
                    </div>
                    <div
                        style={{
                            width: "7%",
                            height: "100%",
                        }}
                    >
                        <div style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",

                            justifyContent: "center",
                            padding: "0 10px"

                        }}>
                            <div style={{
                                textTransform: "uppercase",
                                fontWeight: "500"
                            }}>
                                <Search>
                                    <SearchIconWrapper >
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                        style={{
                                            borderLeft: "1px solid #393939",
                                            borderRight: "1px solid #393939",
                                        }}
                                    />
                                </Search>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                minWidth: "1200px",
                backgroundColor: "#202020",
                height: 40,
                color: "white",
                borderBottom: "1px solid #393939",

            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                    alignItems: "center",

                }}>
                    <div style={{
                        display: "flex",
                        gap: "50px"
                    }}>
                        {items.map((items, index) => {
                            return (
                                <Link key={index} className='navbar-name' href={items.link} style={{
                                    color: "white",
                                    textDecoration: "none",

                                }}>
                                    {items.name}
                                </Link>
                            )
                        })}


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Header
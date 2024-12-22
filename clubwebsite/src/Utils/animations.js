/*
These are the animations that are used specifically in the Mobile Navbar Component When the user clicks on the hamburger icon
*/
export const navbarMenuVariants={
    hidden:{x:100,opacity:0},
    visible:{x:0,opacity:1,transition:{type:'spring','stiffness':120,damping:20,staggerChildren:0.2,duration:1}},
}
export const navbarMenuItemsVariants={
    hidden:{opacity:0,x:50},
    visible:{opacity:1,x:0}
}


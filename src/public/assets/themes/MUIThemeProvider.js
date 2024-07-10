import { createTheme } from "@mui/material"


const colors ={
    primary :{
        900:"#736451",
        800:"#86755f",
        700:"#99866c",
        600:"#ac977a",
        500:"#c0a888",
        400:"#CDB9A0",
        300:"#D9CBB8",
        200:"#E6DCCF",
        100:"#F2EEE7"
    },
    secondary:{
        900:"#7a878d",
        800:"#8e9ea4",
        700:"#a3b4bc",
        600:"#b7cbd3",
        500:"#cce2eb",
        400:"#d1e4ed",
        300:"#d6e7ef",
        200:"#dbeaf1",
        100:"#e0edf3"
    },
    black:{
        900:"#000000",
        800:"#444444",
        700:"#8E8B8B",
        600:"#999999",
        500:"#cccccc",
        400:"#e6e6e6",
        300:"#f0f0f0",
        200:"#f5f5f5",
        100:"#fafafa"
    },
    red:{
        primary:"#D21B28"
    },
    soft_grey:{
        primary:"#F5F4F4"
    },
    bold_grey:{
        primary:"#DED9D5"
    }
}

export const theme = createTheme({
    palette:{
        primary:{
            900: colors.primary[900],
            800: colors.primary[800],
            700: colors.primary[700],
            600: colors.primary[600],
            main: colors.primary[500],
            400: colors.primary[400],
            300: colors.primary[300],
            200: colors.primary[200],
            100: colors.primary[100]
        },
        secondary:{
            900: colors.secondary[900],
            800: colors.secondary[800],
            700: colors.secondary[700],
            600: colors.secondary[600],
            main: colors.secondary[500],
            400: colors.secondary[400],
            300: colors.secondary[300],
            200: colors.secondary[200],
            100: colors.secondary[100]
        },
        black:{
            900: colors.black[900],
            800: colors.black[800],
            700: colors.black[700],
            600: colors.black[600],
            main: colors.black[500],
            400: colors.black[400],
            300: colors.black[300],
            200: colors.black[200],
            100: colors.black[100]
        },
        red:{
            primary: colors.red.primary
        },
        soft_grey:{
            primary: colors.soft_grey.primary
        },
        bold_grey:{
            primary: colors.bold_grey.primary
        }
    },
    typography:{
        title_nunito:{
            fontFamily: '"Nunito Sans", sans-serif',
            fontSize: "32px",
            colors: colors.black[900],
        },
        title_alata:{
            fontFamily: '"Alata", sans-serif',
            fontSize: "32px",
            colors: colors.black[900],
        },
        subtitle_nunito:{
            fontFamily: '"Nunito Sans", sans-serif',
            fontSize: "24px",
            colors: colors.black[900],
        },
        subtitle_alata:{
            fontFamily: '"Alata", sans-serif',
            fontSize: "24px",
            colors: colors.black[900],
        },
        body1_nunito:{
            fontFamily: '"Nunito Sans", sans-serif',
            fontSize: "16px",
            colors: colors.black[900],
        },
        body1_alata:{
            fontFamily: '"Alata", sans-serif',
            fontSize: "16px",
            colors: colors.black[900],
        },
        body2_nunito:{
            fontFamily: '"Nunito Sans", sans-serif',
            fontSize: "13px",
            colors: colors.black[900],
        },
        body2_alata:{
            fontFamily: '"Alata", sans-serif',
            fontSize: "13px",
            colors: colors.black[900],
        },
        button:{
            fontFamily: '"Nunito Sans", sans-serif',
            fontSize: "16px",
            colors: colors.black[900],
        }

    },
    button:{
        fontFamily: '"Nunito Sans", sans-serif',
    }
})
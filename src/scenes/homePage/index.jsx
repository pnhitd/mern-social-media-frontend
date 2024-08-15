import Navbar from "scenes/navbar";
import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import UserWidget from "scenes/widgets/UserWidget";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isNonMobileSreen = useMediaQuery('(min-width:1000px)');
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box>
      <Navbar />
      <Box
        width='100%'
        padding='2rem 6%'
        display={isNonMobileSreen ? 'flex' : 'block'}
        gap='0.5rem'
        justifyContent='space-between'
      >
        <Box flexBasis={isNonMobileSreen ? '26%' : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileSreen ? '42%' : undefined}
          mt={isNonMobileSreen ? undefined : '2rem'}
        >

        </Box>
        {isNonMobileSreen && (
          <Box flexBasis='26%'>

          </Box>
        )}
      </Box>
    </Box>
  )
}

export default HomePage;
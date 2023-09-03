import { Box } from '@mui/material';

function SpaceComment() {
  return (
    <Box
      marginTop={2}
      component="section"
      sx={{
        '& .utterances': {
          maxWidth: '100%',
        },
      }}
      ref={(element) => {
        if (!element) {
          return;
        }

        const scriptElement = document.createElement('script');
        scriptElement.setAttribute('src', 'https://utteranc.es/client.js');
        scriptElement.setAttribute('repo', 'YourSSU-Rookieton-SSUPACE/SSUPACE_WEB');
        scriptElement.setAttribute('issue-term', 'pathname');
        scriptElement.setAttribute('theme', 'github-light');
        scriptElement.setAttribute('crossorigin', 'anonymous');
        scriptElement.setAttribute('async', 'true');
        element.replaceChildren(scriptElement);
      }}
    />
  );
}

export default SpaceComment;

// Corrected path: from root to src/index.js
import app from './app.js'; 

// Corrected path: from root to src/config/index.js
import { PORT } from './config/index.js';

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Access API at http://localhost:${PORT}/api/v1`);
});

import Navigo from 'navigo';

const router = new Navigo('/');

router.on({
  '/login': () => {
    // Show login screen
  },
  // ... other routes
});

router.resolve();

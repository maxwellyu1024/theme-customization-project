# Theme Customization Project

This project is a Next.js application that demonstrates advanced theme customization capabilities, providing a smooth and responsive user experience with dynamic theme switching.

## Features

1. **Dynamic Theme Switching**: Users can switch between light and dark modes, as well as choose from a variety of color themes.

2. **System Theme Detection**: The application can detect and apply the user's system theme preference.

3. **Persistent Theme Settings**: User theme preferences are saved in localStorage and persist across sessions.

4. **Smooth Theme Transitions**: Theme changes are applied smoothly without page reloads or noticeable flickering.

5. **Flash of Unstyled Content (FOUC) Prevention**: Implements strategies to prevent FOUC during initial page load and theme application.

6. **Top Loading Progress Bar**: Displays a progress bar at the top of the page during navigation and theme changes for better user feedback.

7. **Responsive Design**: The application is fully responsive and works well on various device sizes.

8. **Customizable Color Palettes**: Includes a wide range of pre-defined color palettes that can be easily customized or extended.

9. **Accessible UI Components**: Utilizes shadcn/ui components, ensuring a high level of accessibility out of the box.

10. **Server-Side Rendering (SSR) Compatible**: The theming system is designed to work seamlessly with Next.js's SSR capabilities.

## Technical Highlights

- Built with Next.js 13+ using the App Router
- Uses React Server Components for improved performance
- Implements a custom `ThemeProvider` for managing theme state
- Utilizes CSS variables for efficient theme application
- Integrates `nprogress` for the top loading bar
- Employs Tailwind CSS for styling, with custom theme extension

## Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies with \`npm install\`
3. Run the development server with \`npm run dev\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- \`app/\`: Contains the main application pages and layouts
- \`components/\`: Reusable React components, including the theme provider and UI elements
- \`themes/\`: Theme definitions and color palettes
- \`lib/\`: Utility functions and helpers

## Customization

You can easily extend or modify the available themes by editing the files in the \`themes/\` directory. To add a new color theme, create a new file in this directory and add it to the \`themes/index.ts\` file.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).


import { screen, render } from '@testing-library/react'

import Header from '../components/organisms/MainHeader'

describe("Header Component", () => {
    test("Should render a logo", () => {
        render(<Header />);

        const header = screen.getByTestId('logo');

        expect(header).toBeInTheDocument();

    })
})
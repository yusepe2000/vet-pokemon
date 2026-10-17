import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Blog from '../../pages/Blog.jsx';
import posts from '../../data/Blog.js';
 
afterEach(cleanup);
 
describe('Blog Page', () => {
  it('muestra el título del blog', () => {
    render(<Blog />);
    expect(
      screen.getByRole('heading', { name: 'Noticias desde el Centro Pokémon' })
    ).toBeTruthy();
  });
 
  it('muestra todas las noticias', () => {
    const { container } = render(<Blog />);
    expect(container.querySelectorAll('article').length).toBe(posts.length);
  });
 
  it('muestra las noticias de la categoría Urgencias', () => {
    render(<Blog />);
    expect(screen.getAllByText(/Urgencias/).length).toBe(2);
  });
});
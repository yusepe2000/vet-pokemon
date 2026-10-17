import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import BlogSection from '../../components/organisms/BlogSection.jsx';
import posts from '../../data/Blog.js';

afterEach(cleanup);

describe('BlogSection', () => {
  it('muestra el título de la sección', () => {
    render(<BlogSection />);
    expect(
      screen.getByRole('heading', { name: 'Noticias desde el Centro Pokémon' })
    ).toBeTruthy();
  });

  it('muestra una tarjeta por cada noticia', () => {
    const { container } = render(<BlogSection />);
    expect(container.querySelectorAll('article').length).toBe(posts.length);
  });

  it('muestra el título de una noticia concreta', () => {
    render(<BlogSection />);
    expect(
      screen.getByText('UN MACHOP SE TORCIÓ UN BRAZO ENTRENANDO SOLO EN LA MONTAÑA')
    ).toBeTruthy();
  });
});
import { NextResponse } from 'next/server';
import { InstagramData } from '@/types/instagram';
import { env } from '@/lib/env';

export async function GET() {
  try {
    const apiUrl = env.INSTAGRAM_API_URL;
    const token = env.INSTAGRAM_API_TOKEN;

    const response = await fetch(`${apiUrl}/instagram`, {
      headers: {
        token: token,
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Instagram API responded with status: ${response.status}`);
    }

    const data: InstagramData = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Instagram data:', error);

    // Return fallback data in case of error
    return NextResponse.json(
      {
        images: [],
        error: 'Failed to fetch Instagram data',
      },
      { status: 500 }
    );
  }
}

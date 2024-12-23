import { supabase } from '@/lib/supabase'

export const aiService = {
  async getMarketSentiment(tokenAddress: string) {
    try {
      // First check if we have recent insights
      const { data: existingInsights } = await supabase
        .from('ai_insights')
        .select('*')
        .eq('token_address', tokenAddress)
        .eq('type', 'sentiment')
        .order('created_at', { ascending: false })
        .limit(1)
      
      // If recent insight exists (less than 1 hour old), return it
      if (existingInsights?.[0] && 
          new Date(existingInsights[0].created_at).getTime() > Date.now() - 3600000) {
        return existingInsights[0]
      }
      
      // Otherwise, generate new insight
      const sentiment = await analyzeSentiment(tokenAddress)
      
      // Store new insight
      const { data, error } = await supabase
        .from('ai_insights')
        .insert({
          type: 'sentiment',
          data: sentiment.data,
          confidence: sentiment.confidence,
          token_address: tokenAddress,
        })
      
      if (error) throw error
      return data
    } catch (error) {
      console.error('Error getting market sentiment:', error)
      throw error
    }
  }
}

// Helper function moved outside the object
async function analyzeSentiment(tokenAddress: string) {
  // This would integrate with your chosen AI model
  // For now, returning mock data
  return {
    data: {
      sentiment: 'positive',
      score: 0.85,
      trends: ['increasing_volume', 'positive_social_mentions']
    },
    confidence: 0.85
  }
}

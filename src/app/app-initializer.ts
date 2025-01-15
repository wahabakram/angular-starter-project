import { ConfigService } from '@core/services/config.service';

export function initializeApp(configService: ConfigService): () => Promise<unknown> {
  return () => configService.initializeApp();
}

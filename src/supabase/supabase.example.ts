import { Injectable } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Injectable()
export class ExampleSupabaseService {
  constructor(private supabaseService: SupabaseService) {}

  async getUsers() {
    const { data, error } = await this.supabaseService.client
      .from('users')
      .select('*');
    
    if (error) throw error;
    return data;
  }

  async createUser(userData: any) {
    const { data, error } = await this.supabaseService.client
      .from('users')
      .insert(userData)
      .select();
    
    if (error) throw error;
    return data;
  }
}
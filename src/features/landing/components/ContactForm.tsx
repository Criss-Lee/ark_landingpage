'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CONTACT_FORM_WEBHOOK_URL } from '@/features/landing/constants/contact-form.constants';

const formSchema = z.object({
  name: z.string().min(1, { message: '이름을 입력해주세요.' }),
  email: z.string().email({ message: '유효한 이메일을 입력해주세요.' }),
  phone: z.string().optional(),
  concern: z.string().optional(),
  plan: z.enum(['Core', 'Boost', 'Black']),
  privacyPolicy: z.boolean().refine(val => val === true, {
    message: '개인정보처리방침에 동의해주세요.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      concern: '',
      plan: 'Core',
      privacyPolicy: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      await axios.post(CONTACT_FORM_WEBHOOK_URL, data);
      setIsSuccess(true);
      form.reset();
    } catch (err) {
      setError('제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-8 bg-secondary/50 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">정보가 성공적으로 제출되었습니다!</h3>
        <p className="mb-6">곧 담당자가 연락드릴 예정입니다.</p>
        <Button 
          onClick={() => setIsSuccess(false)}
          className="bg-accent-500 hover:bg-accent-500/90"
        >
          다시 작성하기
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input placeholder="홍길동" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>연락처 (선택)</FormLabel>
                <FormControl>
                  <Input placeholder="010-1234-5678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="concern"
            render={({ field }) => (
              <FormItem>
                <FormLabel>현재 가장 큰 업무 고민</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="현재 겪고 계신 업무 고민을 알려주세요." 
                    className="resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="plan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>희망 플랜</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="플랜을 선택해주세요" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Core">Core 플랜</SelectItem>
                    <SelectItem value="Boost">Boost 플랜</SelectItem>
                    <SelectItem value="Black">Black 플랜</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="privacyPolicy"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    개인정보처리방침에 동의합니다
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {error && (
            <div className="text-destructive text-sm">{error}</div>
          )}
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-accent-500 hover:bg-accent-500/90 text-white font-semibold"
          >
            {isSubmitting ? '제출 중...' : '지금 노다의 방주에 승선하기'}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            슈퍼얼리버드 40% 할인 (마감 임박!)
          </p>
        </form>
      </Form>
    </div>
  );
} 
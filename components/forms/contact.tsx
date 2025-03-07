"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/form/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/form/select";
import { Textarea } from "../ui/form/text-area";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "名前は2文字以上で入力してください。",
  }),
  email: z.string().email("有効なメールアドレスを入力してください。"),
  subject: z.enum(["business", "house", "volunteering", "townmaking", "other"]),
  message: z.string().min(10, {
    message: "メッセージは10文字以上で入力してください。",
  }),
});

// Define the subject options.
enum Subject {
  Business = "business",
  House = "house",
  Volunteering = "volunteering",
  TownMaking = "townmaking",
  Other = "other",
}

// Define the Japanese translation for each subject.
const subjectsJA: Record<Subject, string> = {
  [Subject.Business]: "開業",
  [Subject.House]: "住まい",
  [Subject.Volunteering]: "ボランティア",
  [Subject.TownMaking]: "町作り",
  [Subject.Other]: "その他",
};

// Define the receiver email address for each subject.
const receiver: Record<Subject, string> = {
  [Subject.Business]: "hello@bjorkman.kim",
  [Subject.House]: "aki@akiaki.co.jp",
  [Subject.Volunteering]: "hello@bjorkman.kim",
  [Subject.TownMaking]: "aki@akiaki.co.jp",
  [Subject.Other]: "hello@bjorkman.kim",
};

export function ContactForm(props: React.ComponentProps<"form">) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: undefined,
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("form submit values:", values);
    try {
      toast.promise(
        fetch("/api/send", {
          method: "POST",
          body: JSON.stringify({
            to: receiver[values.subject] ?? "hello@bjorkman.kim",
            subject: `秋月 | ${subjectsJA[values.subject]} | ${values.name}`,
            message: `
              <h3>Message</h2>
              ${values.message
                .split("\n")
                .map((line) => `<p>${line}</p>`)
                .join("")}
              <h3>Information</h2>
              <p>
                <b>名前:</b> ${values.name}
              </p>
              <p>
                <b>メール:</b> ${values.email}
              </p>
              <p>
                <b>件名:</b> ${subjectsJA[values.subject]}
              </p>
              `,
          }),
        }),
        {
          loading: "送信中...",
          success: () => {
            form.reset();
            return {
              message:
                "メッセージが正常に送信されました。折り返しご連絡いたします！",
            };
          },
          error: (res) => {
            console.error("Failed to submit contact form:", res);
            return {
              message: "メッセージの送信に失敗しました。",
              description:
                "後でもう一度お試しいただくか、[aki@akiaki.co.jp] まで直接ご連絡ください。",
            };
          },
          duration: 6000,
        }
      );
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      toast.error("メッセージの送信に失敗しました。", {
        dismissible: true,
        description:
          "後でもう一度お試しいただくか、[aki@akiaki.co.jp] まで直接ご連絡ください。",
      });
    }
  }

  return (
    <Form {...props} {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>名前</FormLabel>
              <FormControl>
                <Input type="text" placeholder="秋月　花子" {...field} />
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
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input type="email" placeholder="hello@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>件名</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="件名を入力してください" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(Subject).map(([value, subject]) => {
                      return (
                        <SelectItem key={value} value={subject}>
                          {subjectsJA[subject]}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メッセージ</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="ご用件を詳しくご記入ください"
                  rows={8}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="default">
          送信
        </Button>
      </form>
    </Form>
  );
}

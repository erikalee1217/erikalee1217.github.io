---
title: Why Does AI Sometimes Get It Wrong?
description: An approachable introduction to prompts, hallucinations, tokens, and context windows.
series: From Chatting with AI to Building with It
draft: false
---

*Prompts, hallucinations, tokens, and context windows — explained without the technical headache.*

Have you ever noticed how AI can seem incredibly smart one moment, then confidently give you a completely wrong answer the next?

Sometimes ChatGPT understands exactly what you mean. Other times, you end up rephrasing the same question three times and still don’t get what you wanted.

Why does that happen?

In this series, I want to explore what’s happening behind the AI tools we use every day, without getting lost in technical jargon.

We’ll focus on **large language models (LLMs)**, the technology behind tools like ChatGPT. These models learn patterns from data during training and use what they’ve learned to generate responses. That doesn’t mean they’re retraining themselves every time you chat with them!

A few basic concepts can help explain why AI behaves the way it does.

## 1. Prompts: Why Doesn’t AI Understand What I Want?

💬 *“Why does everyone seem to get amazing results from ChatGPT while I keep getting answers I don’t want?”*

Sometimes, it’s because we haven’t clearly explained what we’re looking for.

A **prompt** is the input we give an AI model. It might be a question, an instruction, or some background information to help the model understand a task.

Imagine you’ve given ChatGPT a news article.

**Vague prompt:**

> Summarize this article.

**Clearer prompt:**

> Summarize this article in three bullet points for someone without a technical background. Separate confirmed facts from speculation.

Both are valid requests. But the second one gives ChatGPT a much better idea of what kind of summary you’re expecting.

This is the basic idea behind **prompt engineering**: figuring out how to give AI instructions that lead to better results.

*“So I should make every prompt super detailed?”*

Not necessarily!

Think about asking a friend for help. Giving them the right background makes things easier, but adding irrelevant details or contradictory instructions probably won’t.

AI works similarly. **A good prompt isn’t necessarily long or clever. It’s clear and relevant.**

You don’t need magical phrases like “Act as the world’s greatest expert.” Just explain what you need, provide useful context, and check whether the answer meets your expectations.

## 2. Hallucinations: Why Does AI Make Things Up?

Imagine asking ChatGPT about a research paper that doesn’t actually exist.

Instead of saying it can’t find the paper, it confidently gives you an author, publication year, and summary.

Sounds impressive. Except none of it is real.

This is called an **AI hallucination**: when a model generates information that seems plausible but is false or unsupported.

💬 *“But why wouldn’t it just say ‘I don’t know’?”*

Part of the reason lies in how language models work.

LLMs learn patterns from enormous amounts of data, including how to predict what text might come next. They become very good at producing coherent answers, but they aren’t necessarily checking every fact before responding.

Hallucinations can also happen when a model lacks reliable information or struggles to recognize when it should express uncertainty.

That’s why an AI-generated answer can sound perfectly convincing and still be wrong.

So what can we do?

- **Allow uncertainty.** Tell the model it’s okay to say when information is missing instead of guessing.
- **Check important sources.** If AI provides a citation, open it! A convincing-looking reference isn’t automatically reliable.
- **Be extra careful with high-stakes information.** Medical, legal, and financial questions deserve additional verification.

Developers can also connect AI to external information using tools and techniques such as retrieval-augmented generation (RAG). These can help reduce unsupported answers, though they don’t eliminate hallucinations completely.

We’ll explore those in the next article.

## 3. Tokens: AI Doesn’t Quite Read Like We Do

Remember when people asked ChatGPT how many r’s were in *strawberry*, and it sometimes got the answer wrong?

It seems like such a simple question. So why would AI struggle with it?

One part of the explanation has to do with **tokens**.

Before text is processed by a language model, a **tokenizer** breaks it into smaller units called tokens.

Think of tokens as little building blocks of language.

A token might represent a word, part of a word, or even punctuation. For example, `playing` could be represented as one token or split into pieces like `play` and `ing`, depending on the tokenizer.

The model then works with numerical representations of these tokens and typically generates its response one token at a time.

This helps explain why counting letters can be surprisingly tricky. The model doesn’t necessarily inspect each word letter by letter the way we might when counting characters. Tokenization is only part of the story, though. Model capabilities matter too, and newer models have improved at these tasks.

So where do tokens show up in everyday use?

They affect a few practical things:

- **Cost:** Many AI APIs charge based on input and output tokens.
- **Speed:** Processing and generating more tokens can take more time.
- **Capacity:** Models have limits on how many tokens they can work with at once.

That last point brings us to our next concept.

## 4. Context Windows: Why Does AI Sometimes Forget?

💬 *“I literally told ChatGPT something earlier. Why is it acting like I never mentioned it?”*

One possible reason is the **context window**.

Imagine AI has a desk where it lays out all the information it needs to answer your question.

On that desk might be your latest message, previous conversations, instructions, and documents you’ve shared.

This information is called **context**.

But the desk has limited space. The amount of information a model can process at once is its **context window**, usually measured in tokens.

So what happens when the conversation gets too long?

It depends on the application. Older messages might be omitted or summarized. Some systems retrieve earlier information when it becomes relevant, while others may reject inputs that exceed their limits.

Either way, something you said earlier might no longer be available to the model.

*“Then why not just make the desk enormous?”*

Good question!

Larger context windows certainly help, but there's another challenge: the more information you give a model, the harder it can be for it to find and use what matters.

Researchers have observed that some models struggle to retrieve important information buried in the middle of very long inputs. This is sometimes called *Lost in the Middle*.

It’s a bit like an open-book exam: having a huge textbook doesn’t mean you’ll find the answer if it’s hidden somewhere on page 347.

Newer models have improved, but long-context reasoning can still be challenging.

There’s also an important distinction between context windows and long-term memory. Some AI products have separate memory features that can bring information from earlier conversations back into the current context.

A few things that can help:

- Start a new conversation when switching to a completely different task.
- Bring over a short summary when continuing a long project.
- Provide relevant information instead of dumping everything into the conversation.
- Repeat important requirements when necessary.

**The goal isn’t always to give AI more information. It’s to give it the right information.**

This broader idea is sometimes called *context engineering*.

## Putting It All Together

So, talking to AI isn’t quite as simple as typing a question and expecting the perfect answer every time.

The four concepts we’ve covered explain different parts of that experience:

- **Prompts** help AI understand what we want.
- **Hallucinations** remind us that confident answers aren’t always correct.
- **Tokens** shape how models process text and affect practical limits.
- **Context windows** determine how much information a model can work with at once.

Once you understand a little about what’s happening behind the scenes, some of AI’s strange behavior starts to make more sense.

And there’s one more question I find especially interesting.

So far, we’ve talked about AI generating answers for *people* to read.

But what if we want a **program** to use those answers?

Imagine telling AI:

> I have an interview next Wednesday. I need to update my resume and prepare a short introduction.

An AI might understand what you mean. But if we’re building an app that turns this message into tasks, the software needs something more structured than a nice paragraph.

It needs to identify the tasks and any relevant dates, then put that information into fields the app can actually use. We also need to think about what happens when the model makes a mistake.

💬 *“Oh, so it’s not just about getting AI to answer correctly. Other software needs to understand its answers too?”*

Exactly!

**Next up: How do we go from chatting with AI to building applications with it?**

---

*Further reading: [Lost in the Middle](https://arxiv.org/abs/2307.03172) · [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)*
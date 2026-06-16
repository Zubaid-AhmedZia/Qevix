const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type Web3FormsFieldValue = string | number | boolean | undefined;

type SubmitWeb3FormsOptions = {
  subject: string;
  fields: Record<string, Web3FormsFieldValue>;
};

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

export async function submitToWeb3Forms({ subject, fields }: SubmitWeb3FormsOptions) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      success: false,
      message: "Form submission is not configured."
    };
  }

  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("subject", subject);
  formData.append("from_name", "QevixAi Website");

  Object.entries(fields).forEach(([key, value]) => {
    if (value !== undefined) {
      formData.append(key, String(value));
    }
  });

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    });
    const data = (await response.json()) as Web3FormsResponse;

    return {
      success: response.ok && data.success === true,
      message: data.message
    };
  } catch {
    return {
      success: false,
      message: "Network error"
    };
  }
}
